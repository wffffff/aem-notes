<%@page session="false"
        import="
        com.adobe.granite.ui.components.ds.DataSource,
        com.adobe.granite.ui.components.ds.ValueMapResource,
        java.util.HashMap,
        com.day.cq.tagging.Tag,
        org.apache.sling.api.wrappers.ValueMapDecorator,
        com.adobe.granite.ui.components.ds.SimpleDataSource,
        org.apache.commons.collections.iterators.TransformIterator,
        java.util.Map,
        org.apache.commons.collections.Transformer,
        org.apache.sling.api.resource.*"
%>

<%

try{

    Tag[] tags = WCMUtil.getTags(pageManager.getPage(""));
    Map resultMap = new HashMap();

    if (null != tags){
        String text = "";
        if (tags.length > 0){
            text = WCMUtil.getPrimaryTag(currentPage, locale);
        }
        if (StringUtil.isEmpty(text)){
            text = "No primary tag";
        }
        String value = text;
        resultMap.put(value,text);
    }


    //setup the variables for printing the json
    response.setContentType("application/json");
    response.setCharacterEncoding("utf-8");
    final ResourceResolver resolver = resourceResolver;
    DataSource ds = new SimpleDataSource(new TransformIterator(resultMap.keySet().iterator(), new Transformer() {
        public Object transform(Object o) {
            String valueStr = (String) o;
            ValueMap vm = new ValueMapDecorator(new HashMap<String, Object>());
            vm.put("value", valueStr);
            vm.put("text", resultMap.get(valueStr));
            return new ValueMapResource(resolver, new ResourceMetadata(), "nt:unstructured", vm);
        }
    }));
    request.setAttribute(DataSource.class.getName(), ds);
}catch (Exception e){
    e.printStackTrace();
}


%>