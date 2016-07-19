<aura:application controller="simpleController" template="c:SLDTemplate">

    <aura:attribute name="tweets" type="Object[]" />
    <aura:attribute name="screen_name" type="String" default="dcarroll" />
    <aura:handler name="init" value="{!this}" action="{!c.init}" />

    <div class="container">
        <aura:iteration items="{!v.tweets}" var="tweet">
            <article>
                <c:tweetcomponent tweet="{!tweet}" />
            </article>
            <hr/>
        </aura:iteration>
    </div>

</aura:application>